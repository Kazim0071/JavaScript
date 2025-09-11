import React, { useState } from 'react'
import TabButton from './TabButton';
import { EXAMPLES } from '../data';
import Section from './Section';
import Tabs from './Tabs';

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState("");

    function handleClick(selectedButton) {
        setSelectedTopic(selectedButton);
    }
    return (

        <Section title="Examples" id="examples">
            <Tabs ButtonsContainer="menu" buttons={<>
                <TabButton
                    isSelect={selectedTopic === "components"}
                    onClick={() => handleClick("components")}
                >
                    Componentes
                </TabButton>
                <TabButton
                    isSelect={selectedTopic === "jsx"}
                    onClick={() => handleClick("jsx")}
                >
                    JSX
                </TabButton>
                <TabButton
                    isSelect={selectedTopic === "props"}
                    onClick={() => handleClick("props")}
                >
                    Props
                </TabButton>
                <TabButton
                    isSelect={selectedTopic === "state"}
                    onClick={() => handleClick("state")}
                >
                    State
                </TabButton>
            </>}>     {!selectedTopic ? (
                <p>Please Select a Topic</p>
            ) : (
                <div id="tab-content">
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                        <code>{EXAMPLES[selectedTopic].code}</code>
                    </pre>
                </div>
            )}</Tabs>
        </Section>)
}
