import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";



const FormPreview = ({ showPreview, setShowPreview }) => {
    const formData = localStorage.getItem("formData");
    return (
        <div>
            <Dialog open={showPreview} onOpenChange={() => setShowPreview(false)}>
                {/* <DialogTrigger>Open</DialogTrigger> */}
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Preview</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default FormPreview;

