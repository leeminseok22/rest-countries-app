import { useParams } from "react-router-dom";

export default function DetailPage() {
    const { code } = useParams();

    return <h1> detail {code} </h1>;
}
