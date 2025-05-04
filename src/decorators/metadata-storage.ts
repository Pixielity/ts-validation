/**
 * Interface for validation metadata.
 */
export interface ValidationMetadata {
  target: Function
  propertyName: string
  validatorType: string | symbol
  options: any
  args: any[]
}

/**
 * Interface for class metadata.
 */
export interface ClassMetadata {
  target: Function
  options: any
}

/**
 * Storage for validation metadata.
 */
class MetadataStorage {
  private validationMetadata: ValidationMetadata[] = []
  private classMetadata: ClassMetadata[] = []
  private static instance: MetadataStorage

  /**
   * Gets the singleton instance of MetadataStorage.
   */
  static getInstance(): MetadataStorage {
    if (!MetadataStorage.instance) {
      MetadataStorage.instance = new MetadataStorage()
    }
    return MetadataStorage.instance
  }

  /**
   * Adds validation metadata.
   */
  addValidationMetadata(metadata: ValidationMetadata): void {
    this.validationMetadata.push(metadata)
  }

  /**
   * Adds class metadata.
   */
  addClassMetadata(metadata: ClassMetadata): void {
    this.classMetadata.push(metadata)
  }

  /**
   * Gets validation metadata for a target.
   */
  getValidationMetadataForTarget(target: Function): ValidationMetadata[] {
    return this.validationMetadata.filter((metadata) => metadata.target === target)
  }

  /**
   * Gets class metadata for a target.
   */
  getClassMetadataForTarget(target: Function): ClassMetadata | undefined {
    return this.classMetadata.find((metadata) => metadata.target === target)
  }
}

/**
 * Gets the metadata storage instance.
 */
export function getMetadataStorage(): MetadataStorage {
  return MetadataStorage.getInstance()
}
