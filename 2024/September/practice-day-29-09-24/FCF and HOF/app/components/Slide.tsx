// app/components/Slide.tsx

'use client';

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// ייבוא נושא עיצוב
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Solution from './Solution';

interface SlideProps {
  title: string;
  description: string;
  codeExample?: string;
  challenge?: string;
  solution?: string;
  otherCode?: {
    lang: string;
    code: string;
  };
}

const Slide: React.FC<SlideProps> = ({
  title,
  description,
  codeExample,
  challenge,
solution,
  otherCode,
}) => {
    
  console.log(otherCode);
  return (
    <div className="slide">
      <h1>{title}</h1>
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      {otherCode && (
        <div className="code-block">
          <h3>{otherCode.lang}:</h3>
          <SyntaxHighlighter
            language={otherCode.lang}
            style={darcula}
            showLineNumbers
            wrapLines
            customStyle={{
              width: '65vw',
              borderRadius: '10px',
            }}
          >
            {otherCode.code.trim()}
          </SyntaxHighlighter>
        </div>
      )}
      {codeExample && (
        <div className="code-block">
          <h3>דוגמה בסיסית:</h3>
          <SyntaxHighlighter
            language="javascript"
            style={darcula}
            showLineNumbers
            wrapLines
            customStyle={{
              width: '65vw',
              borderRadius: '10px',
            }}
          >
            {codeExample.trim()}
          </SyntaxHighlighter>

        </div>
      )}

      {challenge && (
        <div
          className="challenge"
        >
            <Solution code={solution as string} />
        </div>
      )}
    </div>
  );
};

export default Slide;
