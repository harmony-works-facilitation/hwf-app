
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.2.0'
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class CommunityConnections extends ContentItem {
    public content: Elements.RichTextElement;
    public bannerSlogan: Elements.TextElement;
    public bannerImage: Elements.AssetsElement;
    public pageName: Elements.TextElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'banner_slogan') {
                    return 'bannerSlogan';
                }
                if (elementName === 'banner_image') {
                    return 'bannerImage';
                }
                if (elementName === 'page_name') {
                    return 'pageName';
                }
                return elementName;
            })
        });
    }
}
