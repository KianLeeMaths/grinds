#!/usr/bin/env python3
"""Build index.html from the page template and editable section files."""

from pathlib import Path


ROOT = Path(__file__).resolve().parent
TEMPLATE = ROOT / "templates" / "page.html"
OUTPUT = ROOT / "index.html"
SECTIONS = ("hero", "subjects", "about", "music", "contact")


def main() -> None:
    page = TEMPLATE.read_text(encoding="utf-8")

    for name in SECTIONS:
        marker = "{{" + name + "}}"
        section = (ROOT / "sections" / f"{name}.html").read_text(encoding="utf-8").strip()
        if marker not in page:
            raise ValueError(f"Missing {marker} in {TEMPLATE.relative_to(ROOT)}")
        page = page.replace(marker, section)

    unresolved = [marker for marker in ("{{", "}}") if marker in page]
    if unresolved:
        raise ValueError("Unresolved template marker in generated page")

    OUTPUT.write_text(page.rstrip() + "\n", encoding="utf-8")
    print(f"Built {OUTPUT.name} from {len(SECTIONS)} section files.")


if __name__ == "__main__":
    main()
