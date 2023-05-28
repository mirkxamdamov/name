export const hoc = (hook , Component) => {
    const Result = (props) => <Component {...props} {...hook(props)}/>

    Result.Original = Component
    Result.hook = hook

    return Result
}