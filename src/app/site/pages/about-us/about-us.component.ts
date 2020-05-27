import { Component, OnInit } from '@angular/core';
import { AboutUs } from '@hwfKentico/models/about_us';
import { ActivatedRoute } from '@angular/router';
import { LorumPicsumService } from '@hwfShared/services/lorum-picsum.service';
import { Elements } from '@kentico/kontent-delivery';
import { camelCase } from 'lodash';

@Component({
  selector: 'hwf-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  private content?: AboutUs;

  public pageName?: string;

  public bannerSlogan?: string;

  public bannerImageUrl?: string;

  public listOfServices?: Elements.RichTextElement;

  public spotlightContentStructure?: { [key: string]: Record<string, Elements.RichTextElement | Elements.TextElement> };

  public profileAccordion: { [key: string]: Record<string, Elements.RichTextElement | Elements.TextElement | Elements.AssetsElement> };

  constructor(
    private readonly route: ActivatedRoute,
    private readonly lorumPicsumService: LorumPicsumService,
  ) {}

  ngOnInit(): void {
    this.content = this.route.snapshot.data.content;

    console.log(this.content);

    this.pageName = this.content?.pageName.value ?? 'About Us';

    this.bannerSlogan = this.content?.bannerSlogan.value;

    this.bannerImageUrl = this.content?.bannerImage.value[0]?.url ?? this.lorumPicsumService.getRandomImage();

    this.listOfServices = this.content?.listOfServices;
    console.log('listOfServices', this.listOfServices);

    this.spotlightContentStructure = this.resolveSpotlightContentStructure();
    console.log('spotlightContentStructure', this.spotlightContentStructure);

    this.profileAccordion = this.resolveProfileAccordion();
    console.log('profileAccordion', this.profileAccordion);

    console.log(this.resolveAreasOfExpertise());
    console.log(this.resolveSelectedClientList());
    console.log(this.resolveUniversities());
    console.log(this.resolveGovernmentPublicInstitutions());

  }
  

  private resolveSpotlightContentStructure(term = 'aboutUsSpotlight') {
    const filteredKeys = this.findKeysByTerm(term);

    let spotlight: { [key: string]: Record<string, Elements.RichTextElement | Elements.TextElement> } = {};
    filteredKeys.forEach(key => {
      spotlight[key] = {};
      spotlight[key] = this.content?.[key];
    });

    return spotlight;
  }

  private resolveProfileAccordion(term = 'ProfileAccordion', groups: string[] = ['hamidah', 'patricia', 'associates']) {
    const filteredKeys = this.findKeysByTerm(term, 'includes');

    let accordion: { [key: string]: Record<string, Elements.RichTextElement | Elements.TextElement | Elements.AssetsElement> } = {};
    groups.forEach(group => {
      accordion[group] = {};
      filteredKeys.forEach(key => {
        if (key.startsWith(group)) {
          accordion[group][key] = this.content?.[key];
        }
      });
    });

    return accordion;
  }

  private resolveAreasOfExpertise(term = 'areasOfExpertise'): { [key: string]: Elements.TextElement } {
    const filteredKeys = this.findKeysByTerm(term);

    let areasOfExpertise: { [key: string]: Elements.TextElement } = {};
    filteredKeys.forEach(filteredKey => {
      const [key] = filteredKey.split("areasOfExpertise").reverse();
      areasOfExpertise[camelCase(key)] = this.content?.[filteredKey];
    });

    return areasOfExpertise;
  }

  private resolveSelectedClientList(term = 'selectedClientList'): Elements.AssetsElement[] {
    const filteredKeys = this.findKeysByTerm(term);

    let selectedClientList: Elements.AssetsElement[] = [];
    filteredKeys.forEach(filteredKey => {
      const [key] = filteredKey.split("selectedClientList").reverse();
      selectedClientList.push(this.content?.[filteredKey]);
    });

    return selectedClientList;
  }

  private resolveUniversities(term = "universities"): Elements.AssetsElement[] {
    const filteredKeys = this.findKeysByTerm(term);

    let universities: Elements.AssetsElement[] = [];
    filteredKeys.forEach(filteredKey => {
      const [key] = filteredKey.split("universities").reverse();
      universities.push(this.content?.[filteredKey]);
    });

    return universities;
  }

  private resolveGovernmentPublicInstitutions(term = 'governmentPublicInstitutions'): Elements.AssetsElement[] {
    const filteredKeys = this.findKeysByTerm(term);

    let governmentPublicInstitutions: Elements.AssetsElement[] = [];
    filteredKeys.forEach(filteredKey => {
      const [key] = filteredKey.split(term).reverse();
      governmentPublicInstitutions.push(this.content?.[filteredKey]);
    });

    return governmentPublicInstitutions;
  }

  private findKeysByTerm(term: string, searchMethod: 'startsWith' | 'includes' = 'startsWith'): Array<string> {
    const filteredKeys = Object.keys(this.content ?? []).filter(key => {
      return searchMethod === 'startsWith' ? key.startsWith(term) : key.includes(term);
    });
    return filteredKeys;
  }
  
  public accordionHasContent(accordion: object): boolean {
    return Object.keys(accordion).length > 0;
  }

  public getAccordionElement(accordion: any, elementKey: 'title' | 'headshot' | 'description' | 'qualifications'): Elements.RichTextElement | Elements.AssetsElement | Elements.TextElement | undefined {
    const keys = Object.keys(accordion);
    const match = keys.find(key => key.toLowerCase().includes(elementKey));
    if (match) {
      return accordion[match];
    }
    return undefined;
  }

}
