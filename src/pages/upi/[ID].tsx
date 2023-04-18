import type { NextPage } from "next";
import { useRouter } from "next/router";
import QRCode from "react-qr-code";



const UpiQR: NextPage = () => {
    const router = useRouter();
    const { ID, am } = router.query;
    const paymentlink = `upi://pay?pn=withUpigen&pa=${ID}&cu=INR${am ? am : ''}`
    return (
        <>
            <h1>QR Page</h1>
            <QRCode value={paymentlink} size={200} />
        </>
    )
}

export default UpiQR;