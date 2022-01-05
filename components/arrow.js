import Image from "next/image"

export default function Arrow() {
    return (
        <Image
            priority
            src="/images/arrow_or.png"
            className="test"
            width={100}
            height={100}
            alt="Arrow between steps"
        />
    )
}