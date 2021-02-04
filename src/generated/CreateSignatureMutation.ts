/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateSignatureMutation
// ====================================================

export interface CreateSignatureMutation_createImageSignature {
  __typename: "ImageSignature";
  timestamp: number;
  signature: string;
}

export interface CreateSignatureMutation {
  createImageSignature: CreateSignatureMutation_createImageSignature;
}
