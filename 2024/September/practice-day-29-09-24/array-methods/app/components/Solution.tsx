import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export interface SolutionProps {
    code: string;
}

const Solution: React.FC<SolutionProps> = ({ code }) => {
    const [showSolution, setShowSolution] = useState(false);

    return (
        <div>
            <button onClick={() => setShowSolution(!showSolution)}>
                {showSolution ? 'Hide Solution' : 'Show Solution'}
            </button>
            {showSolution && (
                <SyntaxHighlighter 
                language="typescript"
                style={darcula}
                showLineNumbers
                wrapLines>
                    {code}
                </SyntaxHighlighter>
            )}
        </div>
    );
};

export default Solution;