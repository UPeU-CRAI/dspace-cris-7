import { DSpaceObject } from './dspace-object.model';
import { Bitstream } from './bitstream.model';
import { Item } from './item.model';
import { RemoteData } from '../data/remote-data';
import { Observable } from 'rxjs/Observable';

export class Collection extends DSpaceObject {

  /**
   * A string representing the unique handle of this Collection
   */
  handle: string;

  /**
   * The introductory text of this Collection
   * Corresponds to the metadata field dc.description
   */
  get introductoryText(): string {
    return this.findMetadata('dc.description');
  }

  /**
   * The short description: HTML
   * Corresponds to the metadata field dc.description.abstract
   */
  get shortDescription(): string {
    return this.findMetadata('dc.description.abstract');
  }

  /**
   * The copyright text of this Collection
   * Corresponds to the metadata field dc.rights
   */
  get copyrightText(): string {
    return this.findMetadata('dc.rights');
  }

  /**
   * The license of this Collection
   * Corresponds to the metadata field dc.rights.license
   */
  get dcLicense(): string {
    return this.findMetadata('dc.rights.license');
  }

  /**
   * The sidebar text of this Collection
   * Corresponds to the metadata field dc.description.tableofcontents
   */
  get sidebarText(): string {
    return this.findMetadata('dc.description.tableofcontents');
  }

  /**
   * The deposit license of this Collection
   */
  license: Observable<RemoteData<Item[]>>;

  /**
   * The Bitstream that represents the logo of this Collection
   */
  logo: Observable<RemoteData<Bitstream>>;

  /**
   * The default bitstreams policies of this Collection
   */
  defaultBitstreamsPolicies: Observable<RemoteData<Item[]>>;

  /**
   * An array of Collections that are direct parents of this Collection
   */
  parents: Observable<RemoteData<Collection[]>>;

  /**
   * The Collection that owns this Collection
   */
  owner: Observable<RemoteData<Collection>>;

  items: Observable<RemoteData<Item[]>>;

}
