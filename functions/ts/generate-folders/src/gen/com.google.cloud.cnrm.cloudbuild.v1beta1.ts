export type CloudBuildTrigger = object;

// CloudBuildTriggerList is a list of CloudBuildTrigger
export class CloudBuildTriggerList {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  public apiVersion: string;

  // List of cloudbuildtriggers. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md
  public items: CloudBuildTrigger[];

  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  public kind: string;

  // ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
  public metadata?: CloudBuildTriggerList.Metadata;

  constructor(desc: CloudBuildTriggerList) {
    this.apiVersion = CloudBuildTriggerList.apiVersion;
    this.items = desc.items;
    this.kind = CloudBuildTriggerList.kind;
    this.metadata = desc.metadata;
  }
}

export function isCloudBuildTriggerList(o: any): o is CloudBuildTriggerList {
  return o && o.apiVersion === CloudBuildTriggerList.apiVersion && o.kind === CloudBuildTriggerList.kind;
}

export namespace CloudBuildTriggerList {
  export const apiVersion = "cloudbuild.cnrm.cloud.google.com/v1beta1";
  export const group = "cloudbuild.cnrm.cloud.google.com";
  export const version = "v1beta1";
  export const kind = "CloudBuildTriggerList";

  // CloudBuildTriggerList is a list of CloudBuildTrigger
  export interface Interface {
    // List of cloudbuildtriggers. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md
    items: CloudBuildTrigger[];

    // ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
    metadata?: CloudBuildTriggerList.Metadata;
  }
  // ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
  export class Metadata {
    // continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a consistent list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response, unless you have received this token from an error message.
    public continue?: string;

    // remainingItemCount is the number of subsequent items in the list which are not included in this list response. If the list request contained label or field selectors, then the number of remaining items is unknown and the field will be left unset and omitted during serialization. If the list is complete (either because it is not chunking or because this is the last chunk), then there are no more remaining items and this field will be left unset and omitted during serialization. Servers older than v1.15 do not set this field. The intended use of the remainingItemCount is *estimating* the size of a collection. Clients should not rely on the remainingItemCount to be set or to be exact.
    public remainingItemCount?: number;

    // String that identifies the server's internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
    public resourceVersion?: string;

    // selfLink is a URL representing this object. Populated by the system. Read-only.
    // 
    // DEPRECATED Kubernetes will stop propagating this field in 1.20 release and the field is planned to be removed in 1.21 release.
    public selfLink?: string;
  }
}