import { attributes } from "../content/pages/aboutUs.md";

for (let i = 0; i < attributes.collegues.length; i++) {
  const collegue_slug = attributes.collegues[i];
  const collegue = await import(`../collegues/${collegue_slug}.md`);
  collegue.attributes.slug = collegue_slug;
  attributes.collegues[i] = collegue.attributes;
}

export function getCollegue(slug) {
  const collegue = attributes.collegues.find((s) => s.slug === slug);
  return collegue || null;
}

export const { collegueSectionTitle, collegues } = attributes;

export default attributes;
