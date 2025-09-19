import { ADKMessage } from "@/types/ADKMessage";

export function parseADKResponse<T>(raw: unknown): T | null {
  try {
    // Normalize to a string first
    let responseText: string | null = null;

    if (typeof raw === "string") {
      responseText = raw;
    } else if (raw && typeof raw === "object") {
      const anyRaw: any = raw as any;
      if (typeof anyRaw.response === "string") {
        responseText = anyRaw.response;
      } else if (
        anyRaw.response &&
        typeof anyRaw.response === "object" &&
        typeof anyRaw.response.text === "string"
      ) {
        responseText = anyRaw.response.text;
      }
    }

    if (!responseText) {
      console.error("❌ Expected string response, got:", raw);
      return null;
    }

    let text = responseText.trim();

    // Strip common markdown code fences
    if (text.startsWith("```json")) {
      text = text.slice(7);
    } else if (text.startsWith("```")) {
      text = text.slice(3);
    }
    if (text.endsWith("```")) {
      text = text.slice(0, -3);
    }
    text = text.trim();

    // Helper: sanitize common LLM JSON issues
    const sanitizeJsonText = (input: string): string => {
      let s = input;
      // Normalize smart quotes
      s = s.replace(/[“”]/g, '"').replace(/[‘’]/g, "'");
      // Remove trailing commas before object/array end
      s = s.replace(/,(\s*[}\]])/g, "$1");
      // Escape stray backslashes that are not valid json escapes
      s = s.replace(/\\(?!["\\/bfnrtu])/g, "\\\\");
      return s;
    };

    // First attempt: parse directly
    try {
      return JSON.parse(text) as T;
    } catch (_) {
      // Try again with sanitization on full text
      const sanitized = sanitizeJsonText(text);
      try {
        return JSON.parse(sanitized) as T;
      } catch (_) {
        // Fallback: extract JSON object between first { and last }
        const start = sanitized.indexOf("{");
        const end = sanitized.lastIndexOf("}");
        if (start !== -1 && end !== -1 && end > start) {
          const inner = sanitized.slice(start, end + 1);
          return JSON.parse(inner) as T;
        }
        throw new Error("Invalid JSON format");
      }
    }
  } catch (e) {
    console.error("❌ Error parsing JSON:", e);
    return null;
  }
}
