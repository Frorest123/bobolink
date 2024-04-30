import { ReactNode, Suspense } from "react";

export default function AdminAuthLayout({children}: {children: ReactNode}) {
    return (
        <Suspense fallback={<p>Loading ...</p>}>
            {children}
        </Suspense>
    )
}