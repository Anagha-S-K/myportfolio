import {
  siDropbox, siFastapi, siFlask, siReact, siTailwindcss, siVite, siFfmpeg, siGmail, siNumpy, siOpencv, siPandas, siPostgresql, siPydantic, siPytest, siPython,
  siPytorch, siSqlalchemy,
  type SimpleIcon
} from 'simple-icons';

// Brand marks from Simple Icons (CC0), drawn in the site palette rather than brand colours.
const TOOLS = {
  python: siPython,
  pytorch: siPytorch,
  opencv: siOpencv,
  ffmpeg: siFfmpeg,
  numpy: siNumpy,
  fastapi: siFastapi,
  pydantic: siPydantic,
  sqlalchemy: siSqlalchemy,
  postgresql: siPostgresql,
  pytest: siPytest,
  pandas: siPandas,
  gmail: siGmail,
  dropbox: siDropbox,
  react: siReact,
  vite: siVite,
  tailwind: siTailwindcss,
  flask: siFlask
} satisfies Record<string, SimpleIcon>;

// Tools with no Simple Icons mark get a plain name and a neutral glyph.
const PLAIN = {
  tesseract: 'Tesseract OCR',
  tkinter: 'Tkinter',
  pyzbar: 'pyzbar',
  pyinstaller: 'PyInstaller',
  reportlab: 'ReportLab',
  pdfjs: 'PDF.js',
  llm: 'LLM API'
};

const NAMES: Partial<Record<string, string>> = { pytest: 'pytest', pandas: 'pandas' };

export type ToolKey = keyof typeof TOOLS | keyof typeof PLAIN;

const PLAIN_MARK = 'M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm1.5 5 3 3-3 3 1.4 1.4L12.3 12 7.9 7.6zM12 15v2h6v-2z';

export function ToolChip({ tool }: { tool: ToolKey }) {
  const icon = tool in TOOLS ? TOOLS[tool as keyof typeof TOOLS] : null;
  const name = icon ? NAMES[tool] ?? icon.title : PLAIN[tool as keyof typeof PLAIN];
  return (
    <li className="tool">
      <span className="tool-mark" aria-hidden="true">
        <svg viewBox="0 0 24 24"><path d={icon ? icon.path : PLAIN_MARK} /></svg>
      </span>
      {name}
    </li>
  );
}
