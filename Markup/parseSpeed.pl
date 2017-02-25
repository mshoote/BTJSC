#!/usr/bin/perl
#
use strict;
use warnings;
 
binmode STDOUT, ":utf8";
use utf8;
 
use JSON;
 
my $json;
{
  local $/; #Enable 'slurp' mode

  # Need to get actual files
  open my $fh, "<", "console.json";
  $json = <$fh>;
  close $fh;
}
my $data = decode_json($json);
# Output to screen one of the values read
print "Boss' hobbies: " .
      $data->{'boss'}->{'Hobbies'}->[0] . "n";
# Modify the value, and write the output file as json
$data->{'boss'}->{'Hobbies'}->[0] = "Swimming";
open my $fh, ">", "data_out.json";
print $fh encode_json($data);
close $fh;
