/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientOptions } from "ms-rest-js";
import * as msRest from "ms-rest-js";


/**
 * @interface
 * An interface representing QueryContext.
 * Defines the query context that Bing used for the request.
 *
 */
export interface QueryContext {
  /**
   * @member {string} originalQuery The query string as specified in the
   * request.
   */
  originalQuery: string;
  /**
   * @member {string} [alteredQuery] The query string used by Bing to perform
   * the query. Bing uses the altered query string if the original query string
   * contained spelling mistakes. For example, if the query string is "saling
   * downwind", the altered query string will be "sailing downwind". This field
   * is included only if the original query string contains a spelling mistake.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly alteredQuery?: string;
  /**
   * @member {string} [alterationOverrideQuery] The query string to use to
   * force Bing to use the original string. For example, if the query string is
   * "saling downwind", the override query string will be "+saling downwind".
   * Remember to encode the query string which results in "%2Bsaling+downwind".
   * This field is included only if the original query string contains a
   * spelling mistake.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly alterationOverrideQuery?: string;
  /**
   * @member {boolean} [adultIntent] A Boolean value that indicates whether the
   * specified query has adult intent. The value is true if the query has adult
   * intent; otherwise, false.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly adultIntent?: boolean;
}

/**
 * @interface
 * An interface representing WebMetaTag.
 * Defines a webpage's metadata.
 *
 */
export interface WebMetaTag {
  /**
   * @member {string} [name] The metadata.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [content] The name of the metadata.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly content?: string;
}

/**
 * Contains the possible cases for ResponseBase.
 */
export type ResponseBaseUnion = ResponseBase | IdentifiableUnion;

/**
 * @interface
 * An interface representing ResponseBase.
 */
export interface ResponseBase {
  /**
   * @member {string} _type Polymorphic Discriminator
   */
  _type: "ResponseBase";
}

/**
 * Contains the possible cases for Identifiable.
 */
export type IdentifiableUnion = Identifiable | ResponseUnion;

/**
 * @interface
 * An interface representing Identifiable.
 * Defines the identity of a resource.
 *
 */
export interface Identifiable {
  /**
   * @member {string} _type Polymorphic Discriminator
   */
  _type: "Identifiable";
  /**
   * @member {string} [id] A String identifier.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
}

/**
 * Contains the possible cases for Response.
 */
export type ResponseUnion = Response | SearchResponse | ErrorResponse | AnswerUnion | ThingUnion;

/**
 * @interface
 * An interface representing Response.
 * Defines a response. All schemas that could be returned at the root of a
 * response should inherit from this
 *
 */
export interface Response {
  /**
   * @member {string} _type Polymorphic Discriminator
   */
  _type: "Response";
  /**
   * @member {string} [id] A String identifier.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [webSearchUrl] The URL To Bing's search result for this
   * item.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly webSearchUrl?: string;
}

/**
 * Contains the possible cases for Thing.
 */
export type ThingUnion = Thing | CreativeWorkUnion;

/**
 * @interface
 * An interface representing Thing.
 */
export interface Thing {
  /**
   * @member {string} _type Polymorphic Discriminator
   */
  _type: "Thing";
  /**
   * @member {string} [id] A String identifier.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [webSearchUrl] The URL To Bing's search result for this
   * item.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly webSearchUrl?: string;
  /**
   * @member {string} [name] The name of the thing represented by this object.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [url] The URL to get more information about the thing
   * represented by this object.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly url?: string;
  /**
   * @member {string} [description] A short description of the item.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly description?: string;
  /**
   * @member {string} [bingId] An ID that uniquely identifies this item.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly bingId?: string;
}

/**
 * Contains the possible cases for CreativeWork.
 */
export type CreativeWorkUnion = CreativeWork | WebPage;

/**
 * @interface
 * An interface representing CreativeWork.
 */
export interface CreativeWork {
  /**
   * @member {string} _type Polymorphic Discriminator
   */
  _type: "CreativeWork";
  /**
   * @member {string} [id] A String identifier.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [webSearchUrl] The URL To Bing's search result for this
   * item.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly webSearchUrl?: string;
  /**
   * @member {string} [name] The name of the thing represented by this object.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [url] The URL to get more information about the thing
   * represented by this object.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly url?: string;
  /**
   * @member {string} [description] A short description of the item.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly description?: string;
  /**
   * @member {string} [bingId] An ID that uniquely identifies this item.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly bingId?: string;
  /**
   * @member {string} [thumbnailUrl] The URL to a thumbnail of the item.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly thumbnailUrl?: string;
  /**
   * @member {ThingUnion[]} [provider] The source of the creative work.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provider?: ThingUnion[];
  /**
   * @member {string} [text] **NOTE: This property will not be serialized. It
   * can only be populated by the server.**
   */
  readonly text?: string;
}

/**
 * @interface
 * An interface representing WebPage.
 * Defines a webpage that is relevant to the query.
 *
 */
export interface WebPage {
  /**
   * @member {string} _type Polymorphic Discriminator
   */
  _type: "WebPage";
  /**
   * @member {string} [id] A String identifier.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [webSearchUrl] The URL To Bing's search result for this
   * item.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly webSearchUrl?: string;
  /**
   * @member {string} [name] The name of the thing represented by this object.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [url] The URL to get more information about the thing
   * represented by this object.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly url?: string;
  /**
   * @member {string} [description] A short description of the item.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly description?: string;
  /**
   * @member {string} [bingId] An ID that uniquely identifies this item.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly bingId?: string;
  /**
   * @member {string} [thumbnailUrl] The URL to a thumbnail of the item.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly thumbnailUrl?: string;
  /**
   * @member {ThingUnion[]} [provider] The source of the creative work.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provider?: ThingUnion[];
  /**
   * @member {string} [text] **NOTE: This property will not be serialized. It
   * can only be populated by the server.**
   */
  readonly text?: string;
  /**
   * @member {string} [displayUrl] The display URL of the webpage. The URL is
   * meant for display purposes only and is not well formed.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly displayUrl?: string;
  /**
   * @member {string} [snippet] A snippet of text from the webpage that
   * describes its contents.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly snippet?: string;
  /**
   * @member {WebPage[]} [deepLinks] A list of links to related content that
   * Bing found in the website that contains this webpage. The Webpage object
   * in this context includes only the name, url, urlPingSuffix, and snippet
   * fields.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly deepLinks?: WebPage[];
  /**
   * @member {string} [dateLastCrawled] The last time that Bing crawled the
   * webpage. The date is in the form, YYYY-MM-DDTHH:MM:SS. For example,
   * 2015-04-13T05:23:39.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly dateLastCrawled?: string;
  /**
   * @member {WebMetaTag[]} [searchTags] A list of search tags that the webpage
   * owner specified on the webpage. The API returns only indexed search tags.
   * The name field of the MetaTag object contains the indexed search tag.
   * Search tags begin with search.* (for example, search.assetId). The content
   * field contains the tag's value.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly searchTags?: WebMetaTag[];
}

/**
 * Contains the possible cases for Answer.
 */
export type AnswerUnion = Answer | SearchResultsAnswerUnion;

/**
 * @interface
 * An interface representing Answer.
 */
export interface Answer {
  /**
   * @member {string} _type Polymorphic Discriminator
   */
  _type: "Answer";
  /**
   * @member {string} [id] A String identifier.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [webSearchUrl] The URL To Bing's search result for this
   * item.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly webSearchUrl?: string;
  /**
   * @member {Query[]} [followUpQueries] **NOTE: This property will not be
   * serialized. It can only be populated by the server.**
   */
  readonly followUpQueries?: Query[];
}

/**
 * Contains the possible cases for SearchResultsAnswer.
 */
export type SearchResultsAnswerUnion = SearchResultsAnswer | WebWebAnswer;

/**
 * @interface
 * An interface representing SearchResultsAnswer.
 */
export interface SearchResultsAnswer {
  /**
   * @member {string} _type Polymorphic Discriminator
   */
  _type: "SearchResultsAnswer";
  /**
   * @member {string} [id] A String identifier.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [webSearchUrl] The URL To Bing's search result for this
   * item.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly webSearchUrl?: string;
  /**
   * @member {Query[]} [followUpQueries] **NOTE: This property will not be
   * serialized. It can only be populated by the server.**
   */
  readonly followUpQueries?: Query[];
  /**
   * @member {QueryContext} [queryContext] **NOTE: This property will not be
   * serialized. It can only be populated by the server.**
   */
  readonly queryContext?: QueryContext;
  /**
   * @member {number} [totalEstimatedMatches] The estimated number of webpages
   * that are relevant to the query. Use this number along with the count and
   * offset query parameters to page the results.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly totalEstimatedMatches?: number;
  /**
   * @member {boolean} [isFamilyFriendly] **NOTE: This property will not be
   * serialized. It can only be populated by the server.**
   */
  readonly isFamilyFriendly?: boolean;
}

/**
 * @interface
 * An interface representing WebWebAnswer.
 * Defines a list of relevant webpage links.
 *
 */
export interface WebWebAnswer {
  /**
   * @member {string} _type Polymorphic Discriminator
   */
  _type: "Web/WebAnswer";
  /**
   * @member {string} [id] A String identifier.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [webSearchUrl] The URL To Bing's search result for this
   * item.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly webSearchUrl?: string;
  /**
   * @member {Query[]} [followUpQueries] **NOTE: This property will not be
   * serialized. It can only be populated by the server.**
   */
  readonly followUpQueries?: Query[];
  /**
   * @member {QueryContext} [queryContext] **NOTE: This property will not be
   * serialized. It can only be populated by the server.**
   */
  readonly queryContext?: QueryContext;
  /**
   * @member {number} [totalEstimatedMatches] The estimated number of webpages
   * that are relevant to the query. Use this number along with the count and
   * offset query parameters to page the results.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly totalEstimatedMatches?: number;
  /**
   * @member {boolean} [isFamilyFriendly] **NOTE: This property will not be
   * serialized. It can only be populated by the server.**
   */
  readonly isFamilyFriendly?: boolean;
  /**
   * @member {WebPage[]} value A list of webpages that are relevant to the
   * query.
   */
  value: WebPage[];
  /**
   * @member {boolean} [someResultsRemoved] A Boolean value that indicates
   * whether the response excluded some results from the answer. If Bing
   * excluded some results, the value is true.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly someResultsRemoved?: boolean;
}

/**
 * @interface
 * An interface representing SearchResponse.
 * Defines the top-level object that the response includes when the request
 * succeeds.
 *
 */
export interface SearchResponse {
  /**
   * @member {string} _type Polymorphic Discriminator
   */
  _type: "SearchResponse";
  /**
   * @member {string} [id] A String identifier.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [webSearchUrl] The URL To Bing's search result for this
   * item.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly webSearchUrl?: string;
  /**
   * @member {QueryContext} [queryContext] An object that contains the query
   * string that Bing used for the request. This object contains the query
   * string as entered by the user. It may also contain an altered query string
   * that Bing used for the query if the query string contained a spelling
   * mistake.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly queryContext?: QueryContext;
  /**
   * @member {WebWebAnswer} [webPages] A list of webpages that are relevant to
   * the search query.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly webPages?: WebWebAnswer;
}

/**
 * @interface
 * An interface representing ErrorModel.
 * Defines the error that occurred.
 *
 */
export interface ErrorModel {
  /**
   * @member {ErrorCode} code The error code that identifies the category of
   * error. Possible values include: 'None', 'ServerError', 'InvalidRequest',
   * 'RateLimitExceeded', 'InvalidAuthorization', 'InsufficientAuthorization'.
   * Default value: 'None' .
   */
  code: ErrorCode;
  /**
   * @member {ErrorSubCode} [subCode] The error code that further helps to
   * identify the error. Possible values include: 'UnexpectedError',
   * 'ResourceError', 'NotImplemented', 'ParameterMissing',
   * 'ParameterInvalidValue', 'HttpNotAllowed', 'Blocked',
   * 'AuthorizationMissing', 'AuthorizationRedundancy',
   * 'AuthorizationDisabled', 'AuthorizationExpired'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly subCode?: ErrorSubCode;
  /**
   * @member {string} message A description of the error.
   */
  message: string;
  /**
   * @member {string} [moreDetails] A description that provides additional
   * information about the error.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly moreDetails?: string;
  /**
   * @member {string} [parameter] The parameter in the request that caused the
   * error.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly parameter?: string;
  /**
   * @member {string} [value] The parameter's value in the request that was not
   * valid.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly value?: string;
}

/**
 * @interface
 * An interface representing ErrorResponse.
 * The top-level response that represents a failed request.
 *
 */
export interface ErrorResponse {
  /**
   * @member {string} _type Polymorphic Discriminator
   */
  _type: "ErrorResponse";
  /**
   * @member {string} [id] A String identifier.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [webSearchUrl] The URL To Bing's search result for this
   * item.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly webSearchUrl?: string;
  /**
   * @member {ErrorModel[]} errors A list of errors that describe the reasons
   * why the request failed.
   */
  errors: ErrorModel[];
}

/**
 * @interface
 * An interface representing Query.
 * Defines a search query.
 *
 */
export interface Query {
  /**
   * @member {string} text The query string. Use this string as the query term
   * in a new search request.
   */
  text: string;
  /**
   * @member {string} [displayText] The display version of the query term. This
   * version of the query term may contain special characters that highlight
   * the search term found in the query string. The string contains the
   * highlighting characters only if the query enabled hit highlighting
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly displayText?: string;
  /**
   * @member {string} [webSearchUrl] The URL that takes the user to the Bing
   * search results page for the query.Only related search results include this
   * field.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly webSearchUrl?: string;
  /**
   * @member {string} [searchLink] **NOTE: This property will not be
   * serialized. It can only be populated by the server.**
   */
  readonly searchLink?: string;
}

/**
 * @interface
 * An interface representing CustomSearchAPIClientOptions.
 * @extends ServiceClientOptions
 */
export interface CustomSearchAPIClientOptions extends ServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}

/**
 * @interface
 * An interface representing CustomInstanceSearchOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CustomInstanceSearchOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [acceptLanguage] A comma-delimited list of one or more
   * languages to use for user interface strings. The list is in decreasing
   * order of preference. For additional information, including expected
   * format, see
   * [RFC2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html). This
   * header and the setLang query parameter are mutually exclusive; do not
   * specify both. If you set this header, you must also specify the cc query
   * parameter. Bing will use the first supported language it finds from the
   * list, and combine that language with the cc parameter value to determine
   * the market to return results for. If the list does not include a supported
   * language, Bing will find the closest language and market that supports the
   * request, and may use an aggregated or default market for the results
   * instead of a specified one. You should use this header and the cc query
   * parameter only if you specify multiple languages; otherwise, you should
   * use the mkt and setLang query parameters. A user interface string is a
   * string that's used as a label in a user interface. There are very few user
   * interface strings in the JSON response objects. Any links in the response
   * objects to Bing.com properties will apply the specified language.
   */
  acceptLanguage?: string;
  /**
   * @member {string} [userAgent] The user agent originating the request. Bing
   * uses the user agent to provide mobile users with an optimized experience.
   * Although optional, you are strongly encouraged to always specify this
   * header. The user-agent should be the same string that any commonly used
   * browser would send. For information about user agents, see [RFC
   * 2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).
   */
  userAgent?: string;
  /**
   * @member {string} [clientId] Bing uses this header to provide users with
   * consistent behavior across Bing API calls. Bing often flights new features
   * and improvements, and it uses the client ID as a key for assigning traffic
   * on different flights. If you do not use the same client ID for a user
   * across multiple requests, then Bing may assign the user to multiple
   * conflicting flights. Being assigned to multiple conflicting flights can
   * lead to an inconsistent user experience. For example, if the second
   * request has a different flight assignment than the first, the experience
   * may be unexpected. Also, Bing can use the client ID to tailor web results
   * to that client ID’s search history, providing a richer experience for the
   * user. Bing also uses this header to help improve result rankings by
   * analyzing the activity generated by a client ID. The relevance
   * improvements help with better quality of results delivered by Bing APIs
   * and in turn enables higher click-through rates for the API consumer.
   * IMPORTANT: Although optional, you should consider this header required.
   * Persisting the client ID across multiple requests for the same end user
   * and device combination enables 1) the API consumer to receive a consistent
   * user experience, and 2) higher click-through rates via better quality of
   * results from the Bing APIs. Each user that uses your application on the
   * device must have a unique, Bing generated client ID. If you do not include
   * this header in the request, Bing generates an ID and returns it in the
   * X-MSEdge-ClientID response header. The only time that you should NOT
   * include this header in a request is the first time the user uses your app
   * on that device. Use the client ID for each Bing API request that your app
   * makes for this user on the device. Persist the client ID. To persist the
   * ID in a browser app, use a persistent HTTP cookie to ensure the ID is used
   * across all sessions. Do not use a session cookie. For other apps such as
   * mobile apps, use the device's persistent storage to persist the ID. The
   * next time the user uses your app on that device, get the client ID that
   * you persisted. Bing responses may or may not include this header. If the
   * response includes this header, capture the client ID and use it for all
   * subsequent Bing requests for the user on that device. If you include the
   * X-MSEdge-ClientID, you must not include cookies in the request.
   */
  clientId?: string;
  /**
   * @member {string} [clientIp] The IPv4 or IPv6 address of the client device.
   * The IP address is used to discover the user's location. Bing uses the
   * location information to determine safe search behavior. Although optional,
   * you are encouraged to always specify this header and the X-Search-Location
   * header. Do not obfuscate the address (for example, by changing the last
   * octet to 0). Obfuscating the address results in the location not being
   * anywhere near the device's actual location, which may result in Bing
   * serving erroneous results.
   */
  clientIp?: string;
  /**
   * @member {string} [location] A semicolon-delimited list of key/value pairs
   * that describe the client's geographical location. Bing uses the location
   * information to determine safe search behavior and to return relevant local
   * content. Specify the key/value pair as <key>:<value>. The following are
   * the keys that you use to specify the user's location. lat (required): The
   * latitude of the client's location, in degrees. The latitude must be
   * greater than or equal to -90.0 and less than or equal to +90.0. Negative
   * values indicate southern latitudes and positive values indicate northern
   * latitudes. long (required): The longitude of the client's location, in
   * degrees. The longitude must be greater than or equal to -180.0 and less
   * than or equal to +180.0. Negative values indicate western longitudes and
   * positive values indicate eastern longitudes. re (required): The radius, in
   * meters, which specifies the horizontal accuracy of the coordinates. Pass
   * the value returned by the device's location service. Typical values might
   * be 22m for GPS/Wi-Fi, 380m for cell tower triangulation, and 18,000m for
   * reverse IP lookup. ts (optional): The UTC UNIX timestamp of when the
   * client was at the location. (The UNIX timestamp is the number of seconds
   * since January 1, 1970.) head (optional): The client's relative heading or
   * direction of travel. Specify the direction of travel as degrees from 0
   * through 360, counting clockwise relative to true north. Specify this key
   * only if the sp key is nonzero. sp (optional): The horizontal velocity
   * (speed), in meters per second, that the client device is traveling. alt
   * (optional): The altitude of the client device, in meters. are (optional):
   * The radius, in meters, that specifies the vertical accuracy of the
   * coordinates. Specify this key only if you specify the alt key. Although
   * many of the keys are optional, the more information that you provide, the
   * more accurate the location results are. Although optional, you are
   * encouraged to always specify the user's geographical location. Providing
   * the location is especially important if the client's IP address does not
   * accurately reflect the user's physical location (for example, if the
   * client uses VPN). For optimal results, you should include this header and
   * the X-MSEdge-ClientIP header, but at a minimum, you should include this
   * header.
   */
  location?: string;
  /**
   * @member {string} [countryCode] A 2-character country code of the country
   * where the results come from. This API supports only the United States
   * market. If you specify this query parameter, it must be set to us. If you
   * set this parameter, you must also specify the Accept-Language header. Bing
   * uses the first supported language it finds from the languages list, and
   * combine that language with the country code that you specify to determine
   * the market to return results for. If the languages list does not include a
   * supported language, Bing finds the closest language and market that
   * supports the request, or it may use an aggregated or default market for
   * the results instead of a specified one. You should use this query
   * parameter and the Accept-Language query parameter only if you specify
   * multiple languages; otherwise, you should use the mkt and setLang query
   * parameters. This parameter and the mkt query parameter are mutually
   * exclusive—do not specify both.
   */
  countryCode?: string;
  /**
   * @member {number} [count] The number of search results to return in the
   * response. The default is 10 and the maximum value is 50. The actual number
   * delivered may be less than requested.Use this parameter along with the
   * offset parameter to page results.For example, if your user interface
   * displays 10 search results per page, set count to 10 and offset to 0 to
   * get the first page of results. For each subsequent page, increment offset
   * by 10 (for example, 0, 10, 20). It is possible for multiple pages to
   * include some overlap in results.
   */
  count?: number;
  /**
   * @member {string} [market] The market where the results come from.
   * Typically, mkt is the country where the user is making the request from.
   * However, it could be a different country if the user is not located in a
   * country where Bing delivers results. The market must be in the form
   * <language code>-<country code>. For example, en-US. The string is case
   * insensitive. If known, you are encouraged to always specify the market.
   * Specifying the market helps Bing route the request and return an
   * appropriate and optimal response. If you specify a market that is not
   * listed in Market Codes, Bing uses a best fit market code based on an
   * internal mapping that is subject to change. This parameter and the cc
   * query parameter are mutually exclusive—do not specify both. Default value:
   * 'en-us' .
   */
  market?: string;
  /**
   * @member {number} [offset] The zero-based offset that indicates the number
   * of search results to skip before returning results. The default is 0. The
   * offset should be less than (totalEstimatedMatches - count). Use this
   * parameter along with the count parameter to page results. For example, if
   * your user interface displays 10 search results per page, set count to 10
   * and offset to 0 to get the first page of results. For each subsequent
   * page, increment offset by 10 (for example, 0, 10, 20). it is possible for
   * multiple pages to include some overlap in results.
   */
  offset?: number;
  /**
   * @member {SafeSearch} [safeSearch] A filter used to filter adult content.
   * Off: Return webpages with adult text, images, or videos. Moderate: Return
   * webpages with adult text, but not adult images or videos. Strict: Do not
   * return webpages with adult text, images, or videos. The default is
   * Moderate. If the request comes from a market that Bing's adult policy
   * requires that safeSearch is set to Strict, Bing ignores the safeSearch
   * value and uses Strict. If you use the site: query operator, there is the
   * chance that the response may contain adult content regardless of what the
   * safeSearch query parameter is set to. Use site: only if you are aware of
   * the content on the site and your scenario supports the possibility of
   * adult content. Possible values include: 'Off', 'Moderate', 'Strict'
   */
  safeSearch?: SafeSearch;
  /**
   * @member {string} [setLang] The language to use for user interface strings.
   * Specify the language using the ISO 639-1 2-letter language code. For
   * example, the language code for English is EN. The default is EN (English).
   * Although optional, you should always specify the language. Typically, you
   * set setLang to the same language specified by mkt unless the user wants
   * the user interface strings displayed in a different language. This
   * parameter and the Accept-Language header are mutually exclusive; do not
   * specify both. A user interface string is a string that's used as a label
   * in a user interface. There are few user interface strings in the JSON
   * response objects. Also, any links to Bing.com properties in the response
   * objects apply the specified language.
   */
  setLang?: string;
  /**
   * @member {boolean} [textDecorations] A Boolean value that determines
   * whether display strings should contain decoration markers such as hit
   * highlighting characters. If true, the strings may include markers. The
   * default is false. To specify whether to use Unicode characters or HTML
   * tags as the markers, see the textFormat query parameter.
   */
  textDecorations?: boolean;
  /**
   * @member {TextFormat} [textFormat] The type of markers to use for text
   * decorations (see the textDecorations query parameter). Possible values are
   * Raw—Use Unicode characters to mark content that needs special formatting.
   * The Unicode characters are in the range E000 through E019. For example,
   * Bing uses E000 and E001 to mark the beginning and end of query terms for
   * hit highlighting. HTML—Use HTML tags to mark content that needs special
   * formatting. For example, use <b> tags to highlight query terms in display
   * strings. The default is Raw. For display strings that contain escapable
   * HTML characters such as <, >, and &, if textFormat is set to HTML, Bing
   * escapes the characters as appropriate (for example, < is escaped to &lt;).
   * Possible values include: 'Raw', 'Html'
   */
  textFormat?: TextFormat;
}

/**
 * Defines values for ErrorCode.
 * Possible values include: 'None', 'ServerError', 'InvalidRequest',
 * 'RateLimitExceeded', 'InvalidAuthorization', 'InsufficientAuthorization'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ErrorCode = <ErrorCode>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum ErrorCode {
  None = 'None',
  ServerError = 'ServerError',
  InvalidRequest = 'InvalidRequest',
  RateLimitExceeded = 'RateLimitExceeded',
  InvalidAuthorization = 'InvalidAuthorization',
  InsufficientAuthorization = 'InsufficientAuthorization',
}

/**
 * Defines values for ErrorSubCode.
 * Possible values include: 'UnexpectedError', 'ResourceError',
 * 'NotImplemented', 'ParameterMissing', 'ParameterInvalidValue',
 * 'HttpNotAllowed', 'Blocked', 'AuthorizationMissing',
 * 'AuthorizationRedundancy', 'AuthorizationDisabled', 'AuthorizationExpired'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ErrorSubCode =
 * <ErrorSubCode>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum ErrorSubCode {
  UnexpectedError = 'UnexpectedError',
  ResourceError = 'ResourceError',
  NotImplemented = 'NotImplemented',
  ParameterMissing = 'ParameterMissing',
  ParameterInvalidValue = 'ParameterInvalidValue',
  HttpNotAllowed = 'HttpNotAllowed',
  Blocked = 'Blocked',
  AuthorizationMissing = 'AuthorizationMissing',
  AuthorizationRedundancy = 'AuthorizationRedundancy',
  AuthorizationDisabled = 'AuthorizationDisabled',
  AuthorizationExpired = 'AuthorizationExpired',
}

/**
 * Defines values for SafeSearch.
 * Possible values include: 'Off', 'Moderate', 'Strict'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: SafeSearch = <SafeSearch>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum SafeSearch {
  Off = 'Off',
  Moderate = 'Moderate',
  Strict = 'Strict',
}

/**
 * Defines values for TextFormat.
 * Possible values include: 'Raw', 'Html'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: TextFormat = <TextFormat>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum TextFormat {
  Raw = 'Raw',
  Html = 'Html',
}

/**
 * Contains response data for the search operation.
 */
export type CustomInstanceSearchResponse = SearchResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SearchResponse;
    };
};
