/* eslint-disable @typescript-eslint/require-await */
import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "react-query";
import toast from "../utils/toast";

interface IMutateParams<Param, ReturnType> {
  api: (param: Param) => Promise<AxiosResponse<ReturnType>>;
  success?: string;
  error?: string;
  onSuccess?: (data: AxiosResponse<ReturnType>) => void;
  onError?: (err: AxiosError) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useCustomMutation<Param, ReturnType>({
  api,
  success,
  error,
  onSuccess,
  onError,
}: IMutateParams<Param, ReturnType>) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return useMutation(async (param: Param) => api(param), {
    onSuccess: (data: AxiosResponse<ReturnType, any>) => {
      if (onSuccess) onSuccess(data);
      if (success) toast({ message: success, type: "success" });
    },
    onError: (err: AxiosError) => {
      if (onError) onError(err);
      if (error) toast({ message: error, type: "error" });
    },
  });
}
