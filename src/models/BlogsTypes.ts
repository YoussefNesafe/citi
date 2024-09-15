export type PostResponse = {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
      rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
      rendered: string;
  };
  content: {
      rendered: string;
      protected: boolean;
  };
  excerpt: {
      rendered: string;
      protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: {
      [key: string]: any; // Adjust the type based on specific meta properties if known
  };
  categories: number[];
  tags: number[];
  class_list: string[];
  aioseo_notices: any[];
  amp_enabled: boolean;
  rttpg_featured_image_url: {
      [key: string]: [string, number, number, boolean];
  };
  rttpg_author: {
      display_name: string;
      author_link: string;
  };
  rttpg_comment: number;
  rttpg_category: string;
  rttpg_excerpt: string;
  _links: {
      self: { href: string }[];
      collection: { href: string }[];
      about: { href: string }[];
      author: { embeddable: boolean; href: string }[];
      replies: { embeddable: boolean; href: string }[];
      'version-history': { count: number; href: string }[];
      'wp:featuredmedia': { embeddable: boolean; href: string }[];
      'wp:attachment': { href: string }[];
      'wp:term': {
          taxonomy: string;
          embeddable: boolean;
          href: string;
      }[];
      curies: {
          name: string;
          href: string;
          templated: boolean;
      }[];
  };
}
