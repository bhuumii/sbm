"use client";

import dynamic from "next/dynamic";
import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

const Studio = dynamic(
	() => import("next-sanity/studio").then((mod) => mod.NextStudio),
	{
		ssr: false,
	},
);

export default function StudioPage() {
	return <Studio config={config} />;
}
