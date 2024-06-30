import React from 'react';

interface BoltIconProps {
    size: number;
}

const BoltIcon: React.FC<BoltIconProps> = ({ size }) => {
    return (
        <svg
            width={`${size}px`}
            height={`${size}px`}
            style={{ color: 'white' }}
            viewBox="0 0 22 26"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.2187 1.08333L2.29533 14.2601C1.959 14.7067 1.79083 14.93 1.79446 15.117C1.79761 15.2797 1.87376 15.4324 2.00183 15.5328C2.14901 15.6481 2.42855 15.6481 2.98763 15.6481H11L9.78125 24.9167L19.7047 11.7399C20.041 11.2933 20.2092 11.07 20.2055 10.883C20.2024 10.7203 20.1262 10.5676 19.9982 10.4672C19.851 10.3519 19.5714 10.3519 19.0124 10.3519H11L12.2187 1.08333Z"
                stroke="white"
                strokeWidth="1.625"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default BoltIcon;