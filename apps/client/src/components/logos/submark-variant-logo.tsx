import Image from "next/image";

export function SubmarkVariantLogo(props: { width?: number, height?: number }
): JSX.Element {
  return (
    <Image alt="karohy logo" height={props.height ?? 60} src="/png_logos/Karohy_logo_MAJ_negatif_sans_fond 1.png" width={props.width ?? 60} />
  );
}

export default SubmarkVariantLogo;