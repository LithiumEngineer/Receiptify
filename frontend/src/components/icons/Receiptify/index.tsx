import { FC } from "react";

interface ReceiptifyProps {
    className: string;
}
const Receiptify: FC<ReceiptifyProps> = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className={className}
    >
        <path
            d="M24.2051 8.98247C24.2051 13.9433 17.325 17.9649 6.30762 17.9649C-4.70979 17.9649 12.7179 13.9433 12.7179 8.98247C12.7179 4.0216 -5.94374 1.52588e-05 5.07367 1.52588e-05C16.0911 1.52588e-05 24.2051 4.0216 24.2051 8.98247Z"
            fill="black"
        />
        <rect width="7.24786" height="32" rx="3.62393" fill="black" />
        <path
            d="M32 28.2947C32 32.5059 24.1787 31.7754 18.0513 31.7754C11.9239 31.7754 1.22329 20.2685 1.22329 16.0573C1.22329 11.8462 -1.65691 17.423 4.4705 17.423C10.5979 17.423 31.0258 24.3115 32 28.2947Z"
            fill="black"
        />
    </svg>
);

export default Receiptify;
