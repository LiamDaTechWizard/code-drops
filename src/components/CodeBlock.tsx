import { Highlight, themes } from "prism-react-renderer";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language: string;
  className?: string;
  showLineNumbers?: boolean;
}

const CodeBlock = ({
  code,
  language,
  className,
  showLineNumbers = true,
}: CodeBlockProps) => {
  return (
    <Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
      {({ className: preClassName, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={cn(
            "overflow-x-auto rounded-lg p-4 text-sm font-mono code-scrollbar",
            preClassName,
            className
          )}
          style={{
            ...style,
            backgroundColor: "transparent",
          }}
        >
          {tokens.map((line, i) => (
            <div
              key={i}
              {...getLineProps({ line })}
              className="table-row"
            >
              {showLineNumbers && (
                <span className="table-cell pr-4 text-right text-muted-foreground/50 select-none">
                  {i + 1}
                </span>
              )}
              <span className="table-cell">
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
