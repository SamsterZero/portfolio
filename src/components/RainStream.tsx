'use client'
import { useEffect, useState, useRef } from 'react';

const useInterval = (
  callback: () => void,
  delay: number | null,
): (() => void) => {
  const savedCallback = useRef<() => void>();
  let intervalId: NodeJS.Timeout;

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null) {
      intervalId = setInterval(() => savedCallback.current?.(), delay);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [delay]);

  const clear = (): void => {
    clearInterval(intervalId);
  };

  return clear;
};


const VALID_CHARS = `abcdefghijklmnopqrstuvwxyz0123456789$+-*/=%"'#&_(),.;:?!\\|{}<>[]^~`;
const STREAM_MUTATION_ODDS = 0.02;

const MIN_STREAM_SIZE = 15
const MAX_STREAM_SIZE = 50;

const MIN_INTERVAL_DELAY = 50;
const MAX_INTERVAL_DELAY = 100;

const MIN_DELAY_BETWEEN_STREAMS = 0;
const MAX_DELAY_BETWEEN_STREAMS = 8000;

interface RainStreamProps {
    height?: number;
}

interface ContainerSize {
    width: number;
    height: number;
}

const getRandInRange = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min)) + min;

const getRandChar = (): string =>
    VALID_CHARS.charAt(Math.floor(Math.random() * VALID_CHARS.length));

const getRandStream = (): string[] =>
    new Array(getRandInRange(MIN_STREAM_SIZE, MAX_STREAM_SIZE))
        .fill(undefined).map(_ => getRandChar());

const getMutatedStream = (stream: string[]): string[] => {
    const newStream = [];
    for (let i = 1; i < stream.length; i++) {
        if (Math.random() < STREAM_MUTATION_ODDS) {
            newStream.push(getRandChar());
        } else {
            newStream.push(stream[i]);
        }
    }
    newStream.push(getRandChar());
    return newStream;
};

const RainStream: React.FC<RainStreamProps> = props => {
    const [stream, setStream] = useState<string[]>(getRandStream());
    const [topPadding, setTopPadding] = useState<number>(stream.length * -50);
    const [intervalDelay, setIntervalDelay] = useState<number | null>(null);

    useEffect(() => {
        setTimeout(() => {
            setIntervalDelay(getRandInRange(MIN_INTERVAL_DELAY, MAX_INTERVAL_DELAY));
        }, getRandInRange(MIN_DELAY_BETWEEN_STREAMS, MAX_DELAY_BETWEEN_STREAMS));
    }, []);

    useInterval(() => {
        if (!props.height) return;

        if (!intervalDelay) return;

        if (topPadding > props.height) {
            setStream([]);
            const newStream = getRandStream();
            setStream(newStream);
            setTopPadding(newStream.length * -44);
            setIntervalDelay(null);
            setTimeout(
                () =>
                    setIntervalDelay(
                        getRandInRange(MIN_INTERVAL_DELAY, MAX_INTERVAL_DELAY),
                    ),
                getRandInRange(MIN_DELAY_BETWEEN_STREAMS, MAX_DELAY_BETWEEN_STREAMS),
            );
        } else {
            setTopPadding(topPadding + 44);
        }
        setStream(getMutatedStream);
    }, intervalDelay);

    return (
        <div
            style={{
                fontFamily: 'matrixFont',
                color: '#20c20e',
                writingMode: 'vertical-rl',
                textOrientation: 'upright',
                userSelect: 'none',
                whiteSpace: 'nowrap',
                marginTop: topPadding,
                marginLeft: -15,
                marginRight: -15,
                textShadow: '0px 0px 8px rgba(32, 194, 14, 0.8)',
                fontSize: 50,
            }}>
            {stream.map((char, index) => (
                <a
                    style={{
                        marginTop: -12,
                        opacity: index < 6 ? 0.1 + index * 0.15 : 1,
                        color: index === stream.length - 1 ? '#fff' : undefined,
                        textShadow:
                            index === stream.length - 1
                                ? '0px 0px 20px rgba(255, 255, 255, 1)'
                                : undefined,
                    }}
                    key={index}
                >
                    {char}
                </a>
            ))}
        </div>
    );
};

export default RainStream;