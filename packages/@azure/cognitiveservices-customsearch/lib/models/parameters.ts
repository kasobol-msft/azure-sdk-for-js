/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "acceptLanguage"
  ],
  mapper: {
    serializedName: "Accept-Language",
    type: {
      name: "String"
    }
  }
};
export const clientId: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "clientId"
  ],
  mapper: {
    serializedName: "X-MSEdge-ClientID",
    type: {
      name: "String"
    }
  }
};
export const clientIp: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "clientIp"
  ],
  mapper: {
    serializedName: "X-MSEdge-ClientIP",
    type: {
      name: "String"
    }
  }
};
export const count: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "count"
  ],
  mapper: {
    serializedName: "count",
    type: {
      name: "Number"
    }
  }
};
export const countryCode: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "countryCode"
  ],
  mapper: {
    serializedName: "cc",
    type: {
      name: "String"
    }
  }
};
export const customConfig: msRest.OperationQueryParameter = {
  parameterPath: "customConfig",
  mapper: {
    required: true,
    serializedName: "customConfig",
    type: {
      name: "String"
    }
  }
};
export const location: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "location"
  ],
  mapper: {
    serializedName: "X-Search-Location",
    type: {
      name: "String"
    }
  }
};
export const market: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "market"
  ],
  mapper: {
    serializedName: "mkt",
    defaultValue: 'en-us',
    type: {
      name: "String"
    }
  }
};
export const offset: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "offset"
  ],
  mapper: {
    serializedName: "offset",
    type: {
      name: "Number"
    }
  }
};
export const query: msRest.OperationQueryParameter = {
  parameterPath: "query",
  mapper: {
    required: true,
    serializedName: "q",
    type: {
      name: "String"
    }
  }
};
export const safeSearch: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "safeSearch"
  ],
  mapper: {
    serializedName: "safeSearch",
    type: {
      name: "String"
    }
  }
};
export const setLang: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "setLang"
  ],
  mapper: {
    serializedName: "setLang",
    type: {
      name: "String"
    }
  }
};
export const textDecorations: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "textDecorations"
  ],
  mapper: {
    serializedName: "textDecorations",
    type: {
      name: "Boolean"
    }
  }
};
export const textFormat: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "textFormat"
  ],
  mapper: {
    serializedName: "textFormat",
    type: {
      name: "String"
    }
  }
};
export const userAgent: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "userAgent"
  ],
  mapper: {
    serializedName: "User-Agent",
    type: {
      name: "String"
    }
  }
};
export const xBingApisSDK: msRest.OperationParameter = {
  parameterPath: "xBingApisSDK",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "X-BingApis-SDK",
    defaultValue: 'true',
    type: {
      name: "String"
    }
  }
};
