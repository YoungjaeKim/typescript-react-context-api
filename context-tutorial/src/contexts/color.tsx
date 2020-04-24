import React, { createContext, useState } from 'react';

const ColorContext = createContext({
    state: {color: 'black', subcolor: 'red'},
    actions: {
            // type issue happened. got a hint from; https://stackoverflow.com/a/54784062/361100
            setColor: (color: string) => {},
            setSubcolor: (color: string) => {}
        }
    });

type Props = {
    children: any
}

const ColorProvider = ({ children }: Props) => {
    const [color, setColor] = useState<string>('black');
    const [subcolor, setSubcolor] = useState<string>('red');

    const value = {
        state: { color, subcolor },
        actions: { setColor, setSubcolor }
    };
    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );
}

// const ColorConsumer = ColorContext.Consumer와 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

// ColorProvider와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };


export default ColorContext;
