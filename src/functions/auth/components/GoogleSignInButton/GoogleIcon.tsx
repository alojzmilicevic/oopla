type GoogleIconProps = {
    size?: number;
};

export const GoogleIcon = ({ size = 20 }: GoogleIconProps) => (
    <img
        src="/g-logo.png"
        alt="Google Logo"
        style={{ width: size, height: size }} />
);
