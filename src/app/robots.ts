import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/admin", "/login"]
        },
        sitemap: "https://www.bojeung911.net/sitemap.xml",
    };
}