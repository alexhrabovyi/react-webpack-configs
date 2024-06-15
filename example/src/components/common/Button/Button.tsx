interface ButtonProps {
  handleClick: React.MouseEventHandler,
  children: React.ReactNode,
}

export default function Button({ handleClick, children }: ButtonProps) {
  return <button type="button" onClick={handleClick}>{children}</button>;
}
