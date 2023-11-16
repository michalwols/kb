# PyTorch




## Performance Optimizaitons

- [Performance Tuning Guide — PyTorch Tutorials 2.0.0+cu117 documentation](https://pytorch.org/tutorials/recipes/recipes/tuning_guide.html#use-onednn-graph-with-torchscript-for-inference)
- [Efficient Training on Multiple GPUs](https://huggingface.co/docs/transformers/perf_train_gpu_many)
- [GitHub - LukasHedegaard/pytorch-benchmark: Easily benchmark PyTorch model FLOPs, latency, throughput, allocated gpu memory and energy consumption](https://github.com/LukasHedegaard/pytorch-benchmark)

### Model Initialization
- [Making model initialization faster](http://lernapparat.de/faster-model-init)
	- use context manager with `__torch_function__` to skip CPU init

### Mixed Precision

- [GitHub - TimDettmers/bitsandbytes: 8-bit CUDA functions for PyTorch](https://github.com/TimDettmers/bitsandbytes/)



### Data Loading

- [GitHub - libffcv/ffcv: FFCV: Fast Forward Computer Vision (and other ML workloads!)](https://github.com/libffcv/ffcv)
- [GitHub - mosaicml/streaming: A Data Streaming Library for Efficient Neural Network Training](https://github.com/mosaicml/streaming)

### torch.compile

### JIT


### TorchDynamo

https://github.com/pytorch/torchdynamo

ex: https://github.com/pytorch/torchdynamo/blob/main/benchmarks/training_loss.py

### TorchInductor

https://dev-discuss.pytorch.org/t/torchinductor-a-pytorch-native-compiler-with-define-by-run-ir-and-symbolic-shapes/747


### AITemplate

https://github.com/facebookincubator/AITemplate

## Distributed

- https://lambdalabs.com/blog/multi-node-pytorch-distributed-training-guide/


## Debugging and Profiling

### Memory

- [Debugging PyTorch memory use with snapshots](https://zdevito.github.io/2022/08/16/memory-snapshots.html)
- [A guide to PyTorch's CUDA Caching Allocator](https://zdevito.github.io/2022/08/04/cuda-caching-allocator.html)





## Utility Libraries

- [toolbox/pytorch at master · stas00/toolbox · GitHub](https://github.com/stas00/toolbox/tree/master/pytorch)