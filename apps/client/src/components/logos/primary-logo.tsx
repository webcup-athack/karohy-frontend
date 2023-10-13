import Image from "next/image";

export function PrimaryLogo(props: { width?: number, height?: number }
): JSX.Element {
  return (
    <Image alt="karohy logo" height={props.height ?? 60} src="/png_logos/Karohy_Logo_icon_white 1.png" width={props.width ?? 60} />
  );
}

export default PrimaryLogo;