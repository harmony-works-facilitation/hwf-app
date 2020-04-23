
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.2.0'
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Home extends ContentItem {
    public bannerSlogan: Elements.TextElement;
    public executiveSummaryForHarmonyWorksFacilitation: Elements.RichTextElement;
    public pageName: Elements.TextElement;
    public banner: Elements.AssetsElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'banner_slogan') {
                    return 'bannerSlogan';
                }
                if (elementName === 'executive_summary_for_harmony_works_facilitation') {
                    return 'executiveSummaryForHarmonyWorksFacilitation';
                }
                if (elementName === 'page_name') {
                    return 'pageName';
                }
                return elementName;
            })
        });
    }
}
