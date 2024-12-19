import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import projectsData from "./src/services/data/projects.json" assert { type: "json" };

const sitemap = new SitemapStream({
  hostname: "https://ayraultmarlene.fr",
});

const urls = [
  { url: "/", changefreq: "monthly", priority: 1 },
  ...projectsData.map((project) => ({
    url: `/project/${project.id}`,
    changefreq: "monthly",
    priority: 0.8,
  })),
  {
    url: "/CV_AYRAULT.pdf",
    changefreq: "yearly",
    priority: 0.9,
  },
];

urls.forEach((url) => sitemap.write(url));

sitemap.end();

streamToPromise(sitemap).then((data) => {
  createWriteStream("./public/sitemap.xml").write(data);
});
