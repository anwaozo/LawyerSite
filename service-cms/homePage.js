import { attributes, react as HomeContent } from "../content/pages/home.md";

const {
  heroSection,
  legalPartnerSection,
  legalPracticesSection,
  bussinessInformationSection,
  collegueSection,
  ourPostsSection,
  clientTestimonialSection,
} = attributes;

for (let i = 0; i < ourPostsSection.posts.length; i++) {
  const post_slug = ourPostsSection.posts[i];
  const blog = await import(`../blog/post/${post_slug}.md`);
  blog.attributes.slug = post_slug;
  // console.log(blog.attributes);
  ourPostsSection.posts[i] = blog.attributes;
}

for (let i = 0; i < legalPracticesSection.legalPractices.length; i++) {
  const practice_slug = legalPracticesSection.legalPractices[i];
  const practice = await import(`../services/${practice_slug}.md`);
  practice.attributes.slug = practice_slug;
  legalPracticesSection.legalPractices[i] = practice.attributes;
}

for (let i = 0; i < collegueSection.ourCollegues.length; i++) {
  const collegue_slug = collegueSection.ourCollegues[i];
  const collegue = await import(`../collegues/${collegue_slug}.md`);
  collegue.attributes.slug = collegue_slug;
  collegueSection.ourCollegues[i] = collegue.attributes;
}

// console.log(collegueSection);

export {
  heroSection,
  legalPartnerSection,
  legalPracticesSection,
  bussinessInformationSection,
  collegueSection,
  ourPostsSection,
  clientTestimonialSection,
};

export default attributes;
