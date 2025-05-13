import * as React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export function Feedback() {
    const [pageTitle, setPageTitle] = useState("Untitled Page");
    const [pageUrl, setPageUrl] = useState("");
    const router = useRouter();

    const updatePageInfo = () => {
        // Extract the H1 header from the page
        const pageHeading = document.querySelector("h1");
        setPageTitle(pageHeading ? pageHeading.textContent || "Untitled Page" : "Untitled Page");

        // Get the full URL of the page
        setPageUrl(window.location.href);
    };

    useEffect(() => {
        // Update page info on initial render
        updatePageInfo();

        // Listen for route changes
        const handleRouteChange = () => {
            updatePageInfo();
        };

        router.events.on("routeChangeComplete", handleRouteChange);

        return () => {
            // Cleanup event listener on component unmount
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    const mailTitle = encodeURIComponent(`Topic title: ${pageTitle}`);
    const mailBody = encodeURIComponent(`We appreciate your feedback. Please type your comments here:\n\n\n\n\n\n\n\nPage URL: ${pageUrl}`);

    return (
        <div className="sendFeedback">
            <a href={`mailto:fake-email@acme.com?subject=${mailTitle}&body=${mailBody}`}>Contact the docs team</a>
        </div>
    );
}