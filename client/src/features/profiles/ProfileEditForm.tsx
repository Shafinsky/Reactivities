import { Box, Button } from "@mui/material";
import TextInput from "../../app/shared/components/TextInput";
import { useParams } from "react-router";
import { useProfile } from "../../lib/hooks/useProfile";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editProfileSchema, type EditProfileSchema } from "../../lib/schemas/editProfileSchema";
import { useEffect } from "react";

type Props = {
    setEditMode: (editMode: boolean) => void
}
export default function ProfileEditForm({setEditMode}: Props) {
    const { id } = useParams();
    const { editProfile, profile } = useProfile(id);
    const { control, handleSubmit, reset, formState: { isDirty, isValid } } = useForm<EditProfileSchema>({
        resolver: zodResolver(editProfileSchema),
        mode: 'onTouched'
    });

    const onSubmit = (data: EditProfileSchema) => {
        editProfile.mutate(data, {
            onSuccess: () => setEditMode(false)
        });
    }

    useEffect(() => {
        reset({
            displayName: profile?.displayName,
            bio: profile?.bio || ''
        });
    }, [profile, reset]);
    
  return (
    <Box 
        component='form'
        onSubmit={handleSubmit(onSubmit)}
        display='flex'
        flexDirection='column'
        alignContent='center'
        gap={3}
        mt={3}
    >
        <TextInput label='Display Name' name='displayName' control={control} />
        <TextInput 
            label='Bio' 
            name='bio' 
            control={control}
            multiline
            rows={4}
        />
        <Button
            type='submit'
            variant='contained'
            disabled={!isValid || !isDirty || editProfile.isPending}
        >
            Update profile
        </Button>
    </Box>
  )
}
