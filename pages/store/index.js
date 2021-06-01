import React from "react";
import Link from "next/link";

export default function Store() {
    return (
        <p>
            This is Store Page{" "}
            <Link href="/store/punjab state">
                <a>Punjab State</a>
            </Link>{" "}
        </p>
    );
}