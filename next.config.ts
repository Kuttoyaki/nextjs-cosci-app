import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: 
      [
        {
          protocol: "https",
          hostname: "api.codingthailand.com",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "cosci.dev",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "cosci.io",
          port: "",
          pathname: "/**",
        },
      ],
    }
};

export default nextConfig;
