/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { MachineLearningWorkspacesManagementClientContext } from "./machineLearningWorkspacesManagementClientContext";


class MachineLearningWorkspacesManagementClient extends MachineLearningWorkspacesManagementClientContext {
  // Operation groups
  operations: operations.Operations;
  workspaces: operations.Workspaces;

  /**
   * Initializes a new instance of the MachineLearningWorkspacesManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The Microsoft Azure subscription ID.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.MachineLearningWorkspacesManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.operations = new operations.Operations(this);
    this.workspaces = new operations.Workspaces(this);
  }
}

// Operation Specifications

export {
  MachineLearningWorkspacesManagementClient,
  MachineLearningWorkspacesManagementClientContext,
  Models as MachineLearningWorkspacesManagementModels,
  Mappers as MachineLearningWorkspacesManagementMappers
};
export * from "./operations";
