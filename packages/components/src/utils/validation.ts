import { IsEmail, MaxLength, MinLength, Required, Validator } from '@lion/ui/form-core.js';

export type CobaltValidatableElement = HTMLElement & {
  validators?: Validator[];
};

export type CobaltValidatorFactory = () => Validator[];

type ValidatorConfig = {
  getMessage?: () => string;
};

const FORM_ELEMENTS_HAVE_NO_ERROR = 'FormElementsHaveNoError';

function getValidatorName(validator: Validator) {
  return (validator.constructor as typeof Validator).validatorName;
}

function sameValidators(a: Validator[] | undefined, b: Validator[]) {
  const currentValidators = a ?? [];
  return (
    currentValidators.length === b.length &&
    currentValidators.every((validator, index) => validator === b[index])
  );
}

function messageConfig(message: string | undefined, fallback: string): ValidatorConfig {
  return { getMessage: () => message || fallback };
}

function isValidPattern(value: string, pattern: RegExp) {
  pattern.lastIndex = 0;
  const match = pattern.exec(value);
  pattern.lastIndex = 0;
  return Boolean(match && match[0] === value);
}

export class CobaltPatternValidator extends Validator {
  static override get validatorName() {
    return 'Pattern';
  }

  override execute(value: unknown, pattern = this.param): boolean {
    if (!(pattern instanceof RegExp)) {
      throw new Error('Cobalt pattern validation expects a RegExp.');
    }

    return typeof value !== 'string' || !isValidPattern(value, pattern);
  }
}

export class CobaltValidationController {
  private _ownedValidators: Validator[] = [];

  private _userValidators: Validator[] = [];

  private _mergedValidators?: Validator[];

  constructor(private readonly host: CobaltValidatableElement) {}

  sync(
    factory: CobaltValidatorFactory,
    userValidatorsChanged = false,
    validationRulesChanged = false,
  ) {
    if (userValidatorsChanged) {
      if (this.host.validators === this._mergedValidators) {
        if (!validationRulesChanged) {
          return;
        }
      } else {
        this._captureUserValidators();
      }
    }

    this._ownedValidators = factory();

    const nextValidators = [...this._ownedValidators, ...this._userValidators];
    if (!sameValidators(this.host.validators, nextValidators)) {
      this._mergedValidators = nextValidators;
      this.host.validators = nextValidators;
    } else {
      this._mergedValidators = this.host.validators;
    }
  }

  private _captureUserValidators() {
    const owned = new Set(this._ownedValidators);
    this._userValidators = (this.host.validators ?? []).filter(
      (validator) => !owned.has(validator),
    );
  }
}

export function createRequiredValidator(message: string | undefined, fallback: string) {
  return new Required(undefined, messageConfig(message, fallback));
}

export function createEmailValidator(message: string | undefined) {
  return new IsEmail(undefined, messageConfig(message, 'Enter an email address.'));
}

export function createPatternValidator(pattern: string, message: string | undefined) {
  return new CobaltPatternValidator(
    new RegExp(pattern),
    messageConfig(message, 'Enter a value that matches the requested format.'),
  );
}

export function createMinLengthValidator(minLength: number, message: string | undefined) {
  return new MinLength(
    minLength,
    messageConfig(message, `Enter at least ${minLength} characters.`),
  );
}

export function createMaxLengthValidator(maxLength: number, message: string | undefined) {
  return new MaxLength(
    maxLength,
    messageConfig(message, `Enter no more than ${maxLength} characters.`),
  );
}

export function isUsableLength(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value) && value >= 0;
}

export function ensureValidatorsArray(element: CobaltValidatableElement) {
  if (!Array.isArray(element.validators)) {
    element.validators = [];
  }
}

export function hasOwnValidationError(element: {
  validationStates?: Record<string, Record<string, unknown>>;
}) {
  const errors = element.validationStates?.error ?? {};
  return Object.keys(errors).some((name) => name !== FORM_ELEMENTS_HAVE_NO_ERROR);
}

export function hasValidator(validators: Validator[], validatorName: string) {
  return validators.some((validator) => getValidatorName(validator) === validatorName);
}
