import {
  type FieldPath,
  type FieldValues,
  type UseControllerReturn,
  type UseFormReturn,
  useController,
} from 'react-hook-form';

export function useControllers<T extends FieldValues>(
  methods: UseFormReturn<T>,
  options?: {
    setDefaultFields?: Array<FieldPath<T>>;
  }
) {
  const { control, getValues } = methods;

  const values = getValues();

  const forms = (options?.setDefaultFields ?? Object.keys(values)).reduce(
    (acc, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const controller = useController<T>({
        name: key as FieldPath<T>,
        control,
      });

      acc[key as FieldPath<T>] = controller;

      return acc;
    },
    {} as Record<FieldPath<T>, UseControllerReturn<T>>
  );

  return forms;
}
