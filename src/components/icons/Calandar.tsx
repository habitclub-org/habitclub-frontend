interface Props {
    width?: number | string;
    height?: number | string;
}

export const Calandar = ({
  width = 'auto',
  height = 'auto'
}: Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.666672 3.12821H1.16667H0.666672ZM0.666672 9.69231H0.166672H0.666672ZM9.69231 11.3333V10.8333V11.3333ZM2.3077 11.3333V11.8333H2.3077L2.3077 11.3333ZM11.3333 3.12823H10.8333H11.3333ZM11.3333 9.69231H11.8333H11.3333ZM9.69232 1.4872L9.69231 1.9872L9.69232 1.4872ZM2.3077 1.48719L2.3077 0.987187L2.3077 1.48719ZM11.3333 4.85898C11.6095 4.85898 11.8333 4.63512 11.8333 4.35898C11.8333 4.08284 11.6095 3.85898 11.3333 3.85898V4.85898ZM0.666672 3.85898C0.39053 3.85898 0.166672 4.08284 0.166672 4.35898C0.166672 4.63512 0.39053 4.85898 0.666672 4.85898V3.85898ZM3.03847 2.3077C3.03847 2.58384 3.26232 2.8077 3.53847 2.8077C3.81461 2.8077 4.03847 2.58384 4.03847 2.3077H3.03847ZM4.03847 0.666672C4.03847 0.390529 3.81461 0.166672 3.53847 0.166672C3.26232 0.166672 3.03847 0.390529 3.03847 0.666672H4.03847ZM7.96154 2.3077C7.96154 2.58384 8.1854 2.8077 8.46154 2.8077C8.73769 2.8077 8.96154 2.58384 8.96154 2.3077L7.96154 2.3077ZM8.96154 0.666672C8.96154 0.390529 8.73769 0.166672 8.46154 0.166672C8.1854 0.166672 7.96154 0.39053 7.96154 0.666672L8.96154 0.666672ZM3.12821 6.32052C2.85207 6.32052 2.62821 6.54437 2.62821 6.82052C2.62821 7.09666 2.85207 7.32052 3.12821 7.32052V6.32052ZM3.94872 7.32052C4.22486 7.32052 4.44872 7.09666 4.44872 6.82052C4.44872 6.54437 4.22486 6.32052 3.94872 6.32052V7.32052ZM5.58975 6.32052C5.31361 6.32052 5.08975 6.54437 5.08975 6.82052C5.08975 7.09666 5.31361 7.32052 5.58975 7.32052V6.32052ZM6.41026 7.32052C6.6864 7.32052 6.91026 7.09666 6.91026 6.82052C6.91026 6.54437 6.6864 6.32052 6.41026 6.32052V7.32052ZM8.05129 6.32052C7.77515 6.32052 7.55129 6.54437 7.55129 6.82052C7.55129 7.09666 7.77515 7.32052 8.05129 7.32052V6.32052ZM8.8718 7.32052C9.14794 7.32052 9.3718 7.09666 9.3718 6.82052C9.3718 6.54437 9.14794 6.32052 8.8718 6.32052V7.32052ZM3.12821 8.3718C2.85207 8.3718 2.62821 8.59566 2.62821 8.8718C2.62821 9.14794 2.85207 9.3718 3.12821 9.3718V8.3718ZM3.94872 9.3718C4.22486 9.3718 4.44872 9.14794 4.44872 8.8718C4.44872 8.59566 4.22486 8.3718 3.94872 8.3718V9.3718ZM5.58975 8.3718C5.31361 8.3718 5.08975 8.59566 5.08975 8.8718C5.08975 9.14794 5.31361 9.3718 5.58975 9.3718V8.3718ZM6.41026 9.3718C6.6864 9.3718 6.91026 9.14794 6.91026 8.8718C6.91026 8.59566 6.6864 8.3718 6.41026 8.3718V9.3718ZM8.05129 8.3718C7.77515 8.3718 7.55129 8.59566 7.55129 8.8718C7.55129 9.14794 7.77515 9.3718 8.05129 9.3718V8.3718ZM8.8718 9.3718C9.14794 9.3718 9.3718 9.14794 9.3718 8.8718C9.3718 8.59566 9.14794 8.3718 8.8718 8.3718V9.3718ZM0.166672 3.12821L0.166672 9.69231H1.16667L1.16667 3.12821H0.166672ZM9.69231 10.8333L2.3077 10.8333L2.3077 11.8333L9.69231 11.8333V10.8333ZM10.8333 3.12823V9.69231H11.8333V3.12823H10.8333ZM9.69232 0.987202L2.3077 0.987187L2.3077 1.98719L9.69231 1.9872L9.69232 0.987202ZM11.8333 3.12823C11.8333 1.94577 10.8748 0.987205 9.69232 0.987202L9.69231 1.9872C10.3225 1.9872 10.8333 2.49806 10.8333 3.12823H11.8333ZM1.16667 3.12821C1.16667 2.49804 1.67753 1.98719 2.3077 1.98719L2.3077 0.987187C1.12524 0.987185 0.166672 1.94576 0.166672 3.12821H1.16667ZM0.166672 9.69231C0.166672 10.8748 1.12524 11.8333 2.3077 11.8333V10.8333C1.67753 10.8333 1.16667 10.3225 1.16667 9.69231H0.166672ZM9.69231 11.8333C10.8748 11.8333 11.8333 10.8748 11.8333 9.69231H10.8333C10.8333 10.3225 10.3225 10.8333 9.69231 10.8333V11.8333ZM11.3333 3.85898H0.666672V4.85898H11.3333V3.85898ZM4.03847 2.3077V0.666672H3.03847V2.3077H4.03847ZM8.96154 2.3077L8.96154 0.666672L7.96154 0.666672L7.96154 2.3077L8.96154 2.3077ZM3.12821 7.32052H3.94872V6.32052H3.12821V7.32052ZM5.58975 7.32052H6.41026V6.32052H5.58975V7.32052ZM8.05129 7.32052H8.8718V6.32052H8.05129V7.32052ZM3.12821 9.3718H3.94872V8.3718H3.12821V9.3718ZM5.58975 9.3718H6.41026V8.3718H5.58975V9.3718ZM8.05129 9.3718H8.8718V8.3718H8.05129V9.3718Z" fill="#474747"/>
    </svg>
  )
}