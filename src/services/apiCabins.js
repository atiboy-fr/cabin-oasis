import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
    
    const { data, error } = await supabase
  .from('cabins')
  .select('*')

  if(error) {
    console.log('cabins could not be loaded')
    throw new Error('Cabins could not be loaded')
  }

  return data
}

export async function createEditCabin(newCabin, id) {
  //https://ncegjendqcyywjopxcoq.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl)

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '')
  const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

  let query = supabase.from('cabins')

  if(!id)
  query = query
  .insert([{...newCabin, image: imagePath}])
  
  if(id) query = query.update({ ...newCabin, image: imagePath})
  .eq('id', id)
  .select()
  const {data, error} = await query.select()
  .single()

  if(error) {
    console.log('cabins could not be created')
    throw new Error('Cabins could not be created')
  }

//upload images
  if(hasImagePath) return data
  const { error: storageError } = await supabase
  .storage
  .from('cabin-images')
  .upload(imageName, newCabin.image)

  if(storageError) {
    await supabase
    .from('cabins')
    .delete()
    .eq('id', data.id)

    console.log('cabins could not be deleted')
    throw new Error('Cabins image could not be uploaded , therefore cabin cannot be created')
  }
  

  return data
}

export async function deleteCabin(id) {
  
    const { data, error } = await supabase
    .from('cabins')
    .delete()
    .eq('id', id)

  if(error) {
    console.log('cabins could not be deleted')
    throw new Error('Cabins could not be deleted')
  }
}