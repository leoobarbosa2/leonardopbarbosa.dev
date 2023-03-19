// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for blogpost documents */
interface BlogpostDocumentData {
    /**
     * releaseDate field in *blogpost*
     *
     * - **Field Type**: Date
     * - **Placeholder**: *None*
     * - **API ID Path**: blogpost.publishedDate
     * - **Tab**: Publication
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    publishedDate: prismicT.DateField;
    /**
     * description field in *blogpost*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blogpost.description
     * - **Tab**: Publication
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
    /**
     * title field in *blogpost*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blogpost.title
     * - **Tab**: Publication
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * ogImage field in *blogpost*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: blogpost.ogImage
     * - **Tab**: Publication
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    ogImage: prismicT.ImageField<never>;
    /**
     * Slice Zone field in *blogpost*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: blogpost.slices[]
     * - **Tab**: Publication
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<BlogpostDocumentDataSlicesSlice>;
}
/**
 * Slice for *blogpost → Slice Zone*
 *
 */
type BlogpostDocumentDataSlicesSlice = TextImageSlice;
/**
 * blogpost document from Prismic
 *
 * - **API ID**: `blogpost`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogpostDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<BlogpostDocumentData>, "blogpost", Lang>;
export type AllDocumentTypes = BlogpostDocument;
/**
 * Primary content in DynamicContent → Primary
 *
 */
interface TextImageSliceDefaultPrimary {
    /**
     * content field in *DynamicContent → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: text_image.primary.content
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
}
/**
 * Default variation for DynamicContent Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TextImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextImageSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TextImageSliceDefaultPrimary>, never>;
/**
 * Slice variation for *DynamicContent*
 *
 */
type TextImageSliceVariation = TextImageSliceDefault;
/**
 * DynamicContent Shared Slice
 *
 * - **API ID**: `text_image`
 * - **Description**: `TextImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextImageSlice = prismicT.SharedSlice<"text_image", TextImageSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { BlogpostDocumentData, BlogpostDocumentDataSlicesSlice, BlogpostDocument, AllDocumentTypes, TextImageSliceDefaultPrimary, TextImageSliceDefault, TextImageSliceVariation, TextImageSlice };
    }
}
