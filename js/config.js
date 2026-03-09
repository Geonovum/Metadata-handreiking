let respecConfig = {
  useLogo: true,
  useLabel: true,

  // TODO: title is verplicht! Neem hieronder de titel van het document op
  title: "Metadata handreiking",
  //-- specStatus is verplicht! (activeer 1 van de volgende)
  specStatus: "wv",                 // Werkversie
  //specStatus: "cv",               // Consultatieversie
  //specStatus: "vv",               // Versie ter vaststelling
  //specStatus: "def",              // Vastgestelde versie
//   specStatus: "basis",            // Basis Document

  //-- specType is verplicht bij alle andere dan BASIS
  //specType: "NO",                 // Norm
  //specType: "ST",                 // Standaard
  //specType: "IM",                 // Informatie Model
  //specType: "PR",                 // Praktijkrichtlijn
  specType: "HR",                   // HandReiking
  //specType: "WA",                 // Werkafspraak
  //specType: "BD",                 // Beheer Documentatie
  //specType: "AL",                 // Algemeen document
  //specType: "BP",                 // Best Practice

  //-- pubDomain is verplicht! (komt in de URL)
  //-- zie: https://geonovum.github.io/handleiding-tooling/ReSpec/#pubdomain
  //-- TODO: vul pubDomain in
  pubDomain: "md",

  //-- license: voor de geldende gebruiksvoorwaarden. Default is cc-by.
  //license: "cc-by-nd",            // bronvermelding, geen afgeleide werken (default)
  //license: "cc0",                 // Public Domain Dedication
  license: "cc-by",                 // Attribution, met bronvermelding

  //-- TODO shortName is verplicht! (komt in de URL: kies logische afkorting)
  //-- Regel: shortName mag geen hoofdletters bevatten.
  shortName: "metadata-handreiking",
  
  //edDraftURI = De URI van de draft version. Deze wordt automatisch afgeleid van de github URI; maar kan hier overschreven worden. 
//   edDraftURI: ["https://geonovum.github.io", "/", "Metadata-handreiking"],

  //-- publishDate is verplicht. Als je werkversie gekozen hebt  dan pakt Respec
  //-- de pushdate maar de publishDate is nog steeds verplicht.
  publishDate: "2026-02-18",
  
  //-- publishVersion is verplicht. Hij mag wel leeg zijn [], maar niet de lege string zijn "".
  publishVersion: [],
 
  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beide aan/uit! 
//   previousPublishDate: "2020-04-07",
//   previousMaturity: "WV",

  //-- Deze gebruiken we niet binnen Geonovum
  //prevVersion: "0.0.1",

  //-- TODO: de namen van de Editor(s) / Redacteur(en)
  //-- vul in: per Editor: name:, company:, companyURL:
  editors:
    [
      {
        name: "Niels Hoffmann",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      }
    ],

  //-- de namen van de auteur(s) 
  //-- vul in: per auteur: name:, company:, companyURL: 
  authors:
    [
      {
        name: "Niels Hoffmann",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      },
      {
        name: "Ine de Visser",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      }
    ],

  // TODO: Vul de github URL in.
  //neem hier de URL van de github repository op waar het respec document in staat
  github: "https://github.com/Geonovum/Metadata-handreiking",

  // Create PDF and link to file in header (optional):
  // TODO: Change the filename as preferred.
  //alternateFormats: [
  //    {
  //        label: "pdf",
  //        uri: "static/template.pdf",
  //    },
  //],

  // Lokale lijst voor bibliografie
  // - Kijk eerst naar de beschikbare www.specref.org .
  // - Kijk daarna in de organisatieconfig.
  // - Voeg dan pas hieronder toe.
  localBiblio: 
  {
    "ISO19136-2007": {
      "href": "https://www.iso.org/standard/32554.html",
      "title": "ISO 19136:2007 Geographic information -- Geography Markup Language (GML)",
      "date": "September 2007",
      "publisher": "International Organization for Standardization",
    },
    "ISO19101-2002": {
      "href": "https://www.iso.org/standard/26002.html",
      "title": "ISO 19101:2002 Geographic information -- Reference model",
      "date": "Juli 2002",
      "publisher": "International Organization for Standardization",
    },
    "ISO19115-2003": {
      "href": "https://www.iso.org/standard/26020.html",
      "title": "ISO 19115:2003  Geographic information -- Metadata",
      "date": "Mei 2003",
      "publisher": "International Organization for Standardization",
    },
    "ISO19115-2005": {
      "href": "https://www.iso.org/standard/26020.html",
      "title": "ISO 19115:2003  Geographic information -- Metadata",
      "date": "Mei 2003",
      "publisher": "International Organization for Standardization",
    },
    "ISO19115-2008":{
      "href": "https://www.iso.org/standard/26020.html",
      "title": "ISO19115:2005/AC:2008  Geographic information – Metadata, Technical Corrigendum 1",
      "date": "2008",
      "publisher": "International Organization for Standardization",
    },
    "CSW2APISO": {
      "title":"OpenGIS Catalogue Services Specification 2.0.2 - ISO Metadata Application Profile",
      "href":"portal.opengeospatial.org/files/?artifact_id=21460",
      "publisher": "Open Geospatial Consortium",
    },
    "ISO19139-2007": {
      "href": "https://www.iso.org/standard/32557.html",
      "title": " ISO/TS 19139:2007 Geographic information -- Metadata -- XML schema implementation",
      "authors": [""],
      "date": "April 2007",
      "publisher": "International Organization for Standardization",
    },
    "INSPIRE-19115-19119": {
      "href": "http://inspire.ec.europa.eu/documents/Metadata/INSPIRE_MD_IR_and_ISO_v1_2_20100616.pdf",
      "title": "INSPIRE Metadata Implementing Rules: Technical Guidelines based on EN ISO 19115 and EN ISO 19119",
      "authors": ["Drafting Team Metadata and European Commission Joint Research Centre"],
      "date": "26 oktober 2007",
      "publisher": "European Commission Joint Research Centre",
    },
    "INSPIRE1312-2014":{
      "title":"Regulation on interoperability of spatial data services",
      "href":"http://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv%3AOJ.L_.2014.354.01.0008.01.ENG",
      "date":"10 december 2014",
      "publisher": "European commission"
    },
    "INSPIRE-2017": {
      "href": "http://inspire.ec.europa.eu/id/document/tg/metadata-iso19139/2.0.1",
      "title": "Technical Guidance for the implementation of INSPIRE dataset and service metadata based on ISO/TS 19139:2007",
      "date": "2017-03-02",
      "publisher": "European Commission Joint Research Centre",
    },
    "INSPIRE-2008": {
      "href": "http://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32008R1205",
      "title": "Implementing Rules for Metadata",
      "date": "3 December 2008",
      "publisher": "European Commission Joint Research Centre",
    },
    "INSPIRE-2010": {
      "href": "http://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02010R1089-20131230",
      "title": "Implementing Rules for interoperability of spatial data sets and services, met amendementen uit 2011, 2013 en 2014.",
      "authors": [""],
      "date": "February 6, 2011",
      "publisher": "European commission"
    },
    "ISO1064-2014": {
      "href": "https://www.iso.org/standard/63207.html",
      "title": "Hexalobular internal driving feature for bolts and screws",
      "date": "2014-10",
      "publisher": "International Organization for Standardization"
    },
    "ISO8601-2004": {
      "href": "https://www.iso.org/standard/40874.html",
      "title": "Data elements and interchange formats -- Information interchange -- Representation of dates and times",
      "date": "2004-12",
      "publisher": "International Organization for Standardization"
    },
    "ISO19108-2005": {
      "href": "https://www.iso.org/standard/39891.html",
      "title": "Geographic information -- Rules for application schema",
      "date": "2005-06",
      "publisher": "International Organization for Standardization"
    },
    "ISO19128":{
      "title":"Geographic information -- Web map server interface",
      "href":"https://www.iso.org/standard/32546.html",
      "date":"2005-12",
      "publisher": "International Organization for Standardization"
    },
    "ISO19119":{
      "title":"Geographic information -- Services",
      "href":"https://www.iso.org/standard/39890.html",
      "date":"2005-02",
      "publisher": "International Organization for Standardization"
    },
    "ISOTC46":{
      "title":"Information and documentation",
      "href":"https://www.iso.org/committee/48750.html",
      "date": "1947",
      "publisher": "International Organization for Standardization"
    },
    "ISO639-2":{
      "title":"Codes for the representation of names of languages -- Part 2: Alpha-3 code",
      "href":"https://www.iso.org/standard/4767.html",
      "date":"1998-10",
      "publisher": "International Organization for Standardization"
    },
    "DCAT-AP-HVD": {
      title: "DCAT-AP for High-Value Datasets",
      href: "https://semiceu.github.io/uri.semic.eu-generated/DCAT-AP/releases/3.0.0-hvd/",
      authors: "",
      publisher: "SEMIC",
      editors: "",
      date: "5 February 2026",
      status: "Recommendation"
    },
    "DCAT-AP-NL": {
      title: "DCAT-AP-NL",
      href: "https://docs.geostandaarden.nl/dcat/dcat-ap-nl30",
      authors: "",
      publisher: "Geonovum",
      editors: "",
      date: "12 december 2024",
      status: "Recommendation"
    },
  }
};