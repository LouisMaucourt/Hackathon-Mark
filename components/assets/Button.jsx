import Link from 'next/link';

const Button = ({ href, children }) => {
    return (
        <Link className="button" href={href}>
            {children}
        </Link>
    );
};

export default Button;
