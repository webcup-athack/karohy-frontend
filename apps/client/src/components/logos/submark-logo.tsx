import Image from "next/image";

export function SubmarkLogo(props: { width?: number, height?: number }
): JSX.Element {
  return (
    <Image alt="karohy logo" height={props.height ?? 60} src="/png_logos/logo-white-v1-06-06.png" width={props.width ?? 60} />
  );
}

export default SubmarkLogo;