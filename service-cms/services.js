import { attributes } from "../content/pages/services.md";

for (let i = 0; i < attributes.services.length; i++) {
  const service_slug = attributes.services[i];
  const service = await import(`../services/${service_slug}.md`);
  service.attributes.slug = service_slug;
  attributes.services[i] = service.attributes;
}

export function getService(slug) {
  const service = attributes.services.find((s) => s.slug === slug);
  return service || null;
}

export function getOtherServices(slug) {
  let otherServices = attributes.services.filter((s) => s.slug !== slug);
  const random1 =
    otherServices[Math.floor(Math.random() * otherServices.length)];

  otherServices = otherServices.filter((s) => s.slug !== random1.slug);
  const random2 =
    otherServices[Math.floor(Math.random() * otherServices.length)];
  return [random1, random2];
}

export const { pageTitle, pageImage, services } = attributes;

export default attributes;
